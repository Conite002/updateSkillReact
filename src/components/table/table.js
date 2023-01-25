import React, {useState} from 'react';
import Icons from '../icons';

import './table.css'



    const Paginate = (props) =>{
        const pageNumbers = [];
    
        for(let i = 1; i <= Math.ceil(props.totalContents / props.contentsPerPage); i++){
            pageNumbers.push(i);
        }
        return(
            <div className='pagination-footer'>
                <ul className="list">
                    {
                        pageNumbers.map((index) =>(
                            <li key={index} className="page-number" onClick={()=>props.paginate(index)}>
                                {index}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    const  EditRow = ({ editForm, handleUpdateRow, handleChange, currentContents}) => {
        let {id, description, categorie, prix, stock} = editForm
        

        function handleEditForm(e) {
            e.preventDefault();
            const rowFinded = currentContents.find(row=>(row.id === id))
            handleUpdateRow(rowFinded);
        }
        return (
            <div className='edit-row'>
                <div>
                    <h4>MODIFIER UN PRODUIT</h4>
                    <form onSubmit={handleEditForm} className="edit-input">
                        <div className="content">
                            <div>
                                <input type="text" name="id" value={id} onInput={handleChange}/>
                                <input type="text" name="description" value={description} onInput={handleChange}/>
                            </div>
                            <div>
                                <input type="text" name="categorie" value={categorie} onInput={handleChange}/>
                                <input type="text" name="prix" value={prix} onInput={handleChange}/>
                            </div>
                            
                            <div>
                                <input type="text" name="stock" value={stock} onInput={handleChange}/>
                            </div>
                        </div>
                        <div className='submit'><button type="submit" className="update-btn btn ">VALIDER</button></div>
                    </form>
                </div>
                
            </div>
        )
    }
const Table = (props) =>{
    const data = props.data
    const [contentsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const [currentContents, setCurrentContents] = useState(data.body.slice(indexOfFirstContent, indexOfLastContent));
    
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    const [showModalDeleting, setModalDeleting] = useState(false);
    const [rowWantToDelete, setrowWantToDelete] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        id : "",
        description : "",
        categorie : "",
        prix: "",
        stock : "",
    });

    const captureEdit = (clickedRow)=>{
        let filtered = currentContents.filter(row=> (row.id === clickedRow.id))
        setEditForm(filtered[0])
    }
    const changeStateEdit = (row)=>{
        if(row.id === editForm.id){
            setIsEditing(isEditing=> !isEditing)
        }else if(isEditing === false){
            setIsEditing(isEditing =>!isEditing)
        }
    }
    const handleChange = (e)=>{
        setEditForm({
            ...editForm,
            [e.target.name] : e.target.value
        })
        console.log("captured step")
    }

    const handleUpdateRow = (updatedRow) =>{
        setIsEditing(false);
        onUpdateRow(updatedRow);
    }
    
    const onUpdateRow = (updatedRow)=>{
        const rowsUpdate = data.body.map((row) =>{
            if(row.id === updatedRow.id)
                return updatedRow;
            else
                return row
            setCurrentContents(rowsUpdate)
        })
    }

    const handleDelete = (props) =>{

    }

    
    const Pagination = (props) => {
        return (
            <div className="pagination">

                <div className='div-table'>
                    <div className='table-body'>
                        {
                            currentContents.map((row, index) =>{ 
                                return <div className="table-row" key={index}>
                                        {
                                            Object.keys(row).map(index => {
                                                return <div className='table-cell' key={index}>{row[index]}</div>
                                            })
                                        }
                                        { props.displayAction && <div className='table-cell action'>
                                            <div className="edit"
                                                onClick={e=>{
                                                    captureEdit(row)
                                                    changeStateEdit(row)
                                                }}
                                            >
                                                {Icons.edit} 
                                            </div>
                                            <div className="delete"
                                            onClick={e =>{
                                                setModalDeleting(true)
                                                setrowWantToDelete(row.id)
                                                handleDelete(e,row.id)}}>
                                                {Icons.delete} 
                                            </div>
                                        </div>}
                                </div>
                            })
                        }
                    </div>
                </div>
                <Paginate totalContents={data.length} contentsPerPage={contentsPerPage} paginate={paginate} />
            </div>
        )
    }
    

    const ConfirmModal = (props) =>{
        return <div className='confirm-modal'>
            <div>
                <h4 style={{color : "red"}}>Voulez vous vraiment supprimer l'element {props.id} ?</h4>
                <br /><br />
                <div className='yes-or-no'>
                    <button onClick={e=>{
                        setModalDeleting(!showModalDeleting)
                        //deleting
                    }} className='yes-btn'>OUI</button>
                    <button onClick={e=>{
                        setModalDeleting(!showModalDeleting)
                    }} className='no-btn'>NON</button>
                </div>
            </div>
        </div>
    }
    return(
        <div className="container table">
            {showModalDeleting && <ConfirmModal id={rowWantToDelete} />} 

            {isEditing?
                (<EditRow
                editForm={editForm}
                handleUpdateRow={handleUpdateRow}
                currentContents={currentContents}
                handleChange={handleChange}
                />) : null}
            <div className='div-table'>
                <div className='table-head'>
                    <div className='table-row'>
                        {
                            props.data.head.map((item, index) =>(
                                <div className='table-cell' key={index}>{item}</div>
                            ))
                        }
                        {props.displayAction && <div className='table-cell'>Action</div> }
                    </div>
                </div>
            </div>
            <div className="body">
                <Pagination data={props.data.body} displayAction={props.displayAction} />
            </div>
        </div>
    )


}

export default Table;