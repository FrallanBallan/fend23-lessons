export default async function AuthorListPage() {
  const authors = await fetch("http://localhost:3000/api/authors")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(authors);
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1> AUTHORS:{authors && authors.length}</h1>
      {authors.map((author) => (
        <li>{author.name}</li>
      ))}
    </main>
  );
}
