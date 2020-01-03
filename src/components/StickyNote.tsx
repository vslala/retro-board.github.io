import React from 'react'
import {StickyNoteProps, StickyNoteState} from "../interfaces/StickyNoteModel";
import Card from "react-bootstrap/Card";
import Editor from "./Editor";
import Like from "./Like";

class StickyNote extends React.Component<StickyNoteProps, StickyNoteState> {
    
    constructor(props: StickyNoteProps) {
        super(props)
        
        this.handleOnClick = this.handleOnClick.bind(this)
        this.modifyStickyNote = this.modifyStickyNote.bind(this)
    }
    
    state: StickyNoteState = {
        stickyNoteId: "1",
        showEditor: false,
        noteText: this.props.noteText
    }
    
    handleOnClick(): void {
        let noteText = this.state.noteText
        this.setState({showEditor: true, noteText: noteText})
    }
    
    modifyStickyNote(modifiedNote: string) {
        console.log("Modified Note: ", modifiedNote)
        this.setState({showEditor: false, noteText: modifiedNote})
        if (this.props.modifyStickyNote) 
            this.props.modifyStickyNote(this)
    }
    

    render () {
        let style = this.props.style
        return (
        <Card style={{backgroundColor: style?.backgroundColor || "white"}}>
            <Card.Body>
                <div data-testid={"editor"} onClick={this.handleOnClick} style={{color: style?.textColor || "black"}}>
                {
                this.state.showEditor ? 
                    <Editor noteText={this.state.noteText} handleEnter={this.modifyStickyNote} /> : 
                    <p className="card-text">{ this.state.noteText }</p>
                }
                </div>
                <div style={{float: style?.likeBtnPosition || "right"}}><Like stickyNoteId={this.state.stickyNoteId!} /></div>
            </Card.Body>
        </Card>
        )
    }
}

export default StickyNote