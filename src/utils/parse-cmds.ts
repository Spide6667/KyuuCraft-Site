export interface CmdList {
    categories:string[];
    data: Map<string, CmdObj[]>;
}

export interface CmdObj {
  name?: string;
  desc: string;
  options?: string[][];
  aka?: string[]; 
}

export async function getCmdList(): Promise<CmdList> {
  const response = await fetch("data/cmd.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // For testing loading page feature numOfSeconds * 1000
  //await new Promise((resolve) => setTimeout(resolve, 1000 * 1000));

  const json = await response.json();
  console.debug("CMD JSON:", json);

  var categories: string[] = [];
  var data: Map<string, CmdObj[]> = new Map<string, CmdObj[]>();
  for (const category in json) {
    const value = json[category];
    categories.push(category);

    var temp: CmdObj[] = handleJsonObj(value);
    data.set(category, temp);
  }

  return {
    categories: categories,
    data: data
  };
};

function handleJsonObj(value: Object): CmdObj[] {
  console.log("Print", value);
  var array:CmdObj[] = [];

  for (const [cmd, obj] of Object.entries(value)) {
    console.log(cmd, " = ", obj);
    var temp = {"name": cmd, "desc": ""}
    for (const [piece,val] of Object.entries(obj)) {
      temp = {...temp, [piece]:val};
    }
    const tete:CmdObj = temp;
    array.push(tete)
  }

  return array;
}