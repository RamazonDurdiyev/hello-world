export const CandidateProfile = () => {

    const name = "Peter Parker"
    const role = "Web developer"
    const yearsOfExperience = 5
     const isAvailable = true
    return (
        <>
          <h2>{name}</h2>
          <p>{role} with {yearsOfExperience} years of experience</p>
          <p>Started in {2025-yearsOfExperience}</p>
          <p>Status: {isAvailable ? "Available": "Not available"}</p>
          <p>{name.toLowerCase().replace(" ", ".")}@email.com</p>
        </>
    )
}