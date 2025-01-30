type dataType = {
  id: string;
  title: string;
};

const DATA: dataType[] = [
  { id: "1", title: "First" },
  { id: "2", title: "Second" },
  { id: "3", title: "Third" },
  { id: "4", title: "Fourth" },
  { id: "5", title: "Fifth" },
];

// can export more than one item from a file by not using a DEFAULT
// used { } for all items exporting
export {dataType, DATA}