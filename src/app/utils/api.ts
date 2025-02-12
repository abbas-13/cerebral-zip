export const fetchData = async (apiNumber: number) => {
  const username = "trial";
  const password = "assignment123";
  const encodedCredentials = btoa(`${username}:${password}`);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/sample_assignment_api_${apiNumber}`,
    {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};
