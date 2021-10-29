import React from "react";

const displayAsHtml = (strElement: string, Parent: any = "div") => {
  return <Parent dangerouslySetInnerHTML={{ __html: strElement }} />;
};

export default displayAsHtml;
