import * as React from "react";

export const ZipParser = () => {
  const onChangeFile = (event: any) => {
    console.log(event.target.files);
  };
  return (
    <div>
      <input type="file" name="file" onChange={onChangeFile} />
    </div>
  );
};
