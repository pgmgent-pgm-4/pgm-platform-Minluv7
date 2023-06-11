
const FirstTraining = ({trainings}) => {
    return(
        <div>
            {trainings && trainings.map((training =>
            <div className="container col jumbotron" id={training.id}>
                <div>
                <h1>{training.title}</h1>
                <p className="lead">{training.description}</p>
            </div>
            </div>
            ))
            }
        </div>
    )
}

export default FirstTraining;