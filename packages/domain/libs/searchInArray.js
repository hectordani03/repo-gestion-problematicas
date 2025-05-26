export function searchTableInArray(arrayTableNames, tableName) {
  if (typeof tableName !== "string") return -1;
  const tableNameLower = tableName.toLowerCase();

  return arrayTableNames.findIndex(
    (item) => typeof item === "string" && item.toLowerCase() === tableNameLower
  );
}
