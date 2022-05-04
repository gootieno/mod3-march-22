export async function getAllDogs() {
  // Your code here
  const res = await fetch("/dogs");
  return res;
}

export async function getDogNumberTwo() {
  // Your code here
  const res = await fetch("/dogs/2");

  return res;
}

export async function postNewDog() {
  // Your code here
  // mdn: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
  // const paramsExample = new URLSearchParams({"foo": "1", "bar": "2"});

  const newDogBody = new URLSearchParams({ name: "oden", age: "1" });

  //   const options = {
  //     method: "GET|POST|PUT|DELETE",
  //     headers: headers,
  //     body: body
  //     };

  const res = await fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: newDogBody,
  });

  return res;
}

export async function postNewDogV2(name, age) {
  // Your code here
  const newDogBody = new URLSearchParams({ name, age });

  const res = await fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: newDogBody,
  });

  return res;
}

export async function deleteDog(id) {
  // Your code here
  const res = await fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      AUTH: "ckyut5wau0000jyv5bsrud90y",
    },
  });

  return res;
}
