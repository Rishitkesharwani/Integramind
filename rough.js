const processData = async () => {
  throw new Error("Something went wrong");
};
const handleResult = async () => {
  try {
    const result = await processData();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

handleResult();
