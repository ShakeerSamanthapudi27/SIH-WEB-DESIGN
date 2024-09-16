const people =["John","Miller","Kennedy"];
export default function List()
{
    const listitem = people.map(person => <li>{person}</li>)
    return (
        <div>
            <ul>{listitem}</ul>
        </div>
    )
}