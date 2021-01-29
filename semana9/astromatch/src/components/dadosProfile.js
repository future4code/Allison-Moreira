

export default function DadosProfile(props) {

    return (
        <div key={props.info.id}>
            <p>{props.info.name}</p>
            <p>{props.info.age}</p>
            <p>{props.info.bio}</p>
        </div>
    )
}