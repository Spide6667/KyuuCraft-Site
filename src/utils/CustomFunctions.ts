export function handleJsonReturn(json:object) : Map<string,string> {
  const result: Map<string,string> = new Map<string,string>();

  for (const [name, path] of Object.entries(json)) {
    result.set(name, path);
  }

  return result;
}

export async function getMarkdownPage() : Promise<Map<string,string> | null> {
    try {
    const response = await fetch("markdown-pages.json", {
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
    });
    const json = await response.json();
    console.debug("MD Pages JSON:", json);
    const tempData = handleJsonReturn(json);
    return tempData;
    } catch (error) {
    console.error("Error fetching data:", error);
    return null;
    }
}