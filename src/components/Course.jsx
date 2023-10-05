export default function Course({ courseName, description ,children}) {
    return (
        <div>
            My course is {courseName} and {description}
            <br />
            {children}
        </div>
    )
}
