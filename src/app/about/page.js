async function TimeOut() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const page = async () => {
  await TimeOut();
  return <div>about</div>;
};

export default page;
