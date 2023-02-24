import { useQuery, gql } from "@apollo/client";

// this is graphql query syntax instead of REST API
const PICTURES_QUERY = gql`
  query PicturesQuery($limit: Int) {
    pictures(limit: $limit) {
      id
      name
      description
      imageUrl
    }
  }
`;

function PictureGallery() {
  const { loading, error, data } = useQuery(PICTURES_QUERY, { variables: { limit: 4 } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.pictures.map((picture) => (
        <div key={picture.id}>
          <h2>{picture.name}</h2>
          <p>{picture.description}</p>
          <img src={picture.imageUrl} alt={picture.name} />
        </div>
      ))}
    </div>
  );
}

export default PictureGallery;
