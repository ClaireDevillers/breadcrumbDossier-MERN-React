import './Viewer.css'

function Viewer(props) {
    function displayContents(pathContents) {
        if (!pathContents || !pathContents.children) return <div>Empty</div>
        let childrenArr = []
        for (const child in pathContents.children) {
            childrenArr.push(<span key={childrenArr.length} onClick={()=>props.goTo(props.path + child + '/')}>{child}</span>)
        }
        return childrenArr;
    }

    return (
        <div className="Viewer">
            Path Contents: <br />
            {props.pathContents && 
                props.pathContents.type === "file" ? 
                "This is a file" :
                displayContents(props.pathContents)
            }
        </div>
    )
}

export default Viewer;