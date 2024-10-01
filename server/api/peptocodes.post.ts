import { PythonShell, Options } from "python-shell";
import os from "os";

type SeqAA = {
  inputSmiles: string;
  inputCode: string;
  inputDB: string;
  checkSmiles: string;
};

const runPepToCodes = (body: SeqAA) => {
  return runPyScriptPepToCodes(
    "py-resources/PepToCodes/main.py",
    body.inputDB,
    body.inputCode,
    body.checkSmiles,
    body.inputSmiles
  );
};

const runPyScriptPepToCodes = async (
  path: string,
  db: string,
  code: string,
  type: string,
  smiles: string
) => {
  const pythonPath = os.platform() === "win32" ? "python" : "/usr/bin/python3";

  const options: Options = {
    mode: "text",
    pythonPath: pythonPath,
    pythonOptions: ["-u"], // get print results in real-time
    args: [db, code, type, smiles],
    // args: ['peptocodes', 'one letter code', 'smiles', 'N[C@@]([H])(CCCNC(=N)N)C(=O)N[C@@]([H])([C@]([H])(O)C)C(=O)N[C@@]([H])(CCCCN)C(=O)N[C@@]([H])(CCCNC(=N)N)C(=O)O']
  };
  const res = await PythonShell.run(path, options);
  console.log(res);

  return res;
};

const handlePeptocodes = (body: SeqAA) => {
  return runPepToCodes(body);
};

const sendError = (event: any, status: number, error: string) => {
  setResponseStatus(event, status);
  return {
    status: status,
    error: error,
  };
};

const sendResponse = (event: any, response: any) => {
  return {
    ...response,
  };
};

export default defineEventHandler(async (event) => {
  try {
    const body: SeqAA = await readBody(event);

    if (
      !body ||
      !body.inputDB ||
      !body.inputCode ||
      !body.checkSmiles ||
      !body.inputSmiles
    ) {
      return sendError(event, 400, "Bad Request: Missing required fields");
    }

    const result = await handlePeptocodes(body);

    return sendResponse(event, {
      result,
    });
  } catch (error) {
    console.error(error);
    return sendError(event, 500, "Internal Server Error");
  }
});
