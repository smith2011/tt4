import React from 'react';
import {Card,CardHeader,Button} from 'reactstrap';
import firebase from '../../Firebase';

// Algorithms
import getLabel from '../../assets/algorithms/constituentTree';
import getDependency from '../../assets/algorithms/dependencyTree';


class Label extends React.Component {
    state = {
        sentence: '',
        label: '',
        dependency: ''
    };

    drawHandler = async () => {
        const axios = require('axios');
        const corsURL = 'https://cors-anywhere.herokuapp.com/';
        const url = encodeURI(corsURL + 'http://api-thai-parser.iapp.co.th/parse/'); //EncodeURI for Thai Encoding

        try {
            if (this.state.sentence) {
                const res = await axios.get(url.concat(this.state.sentence));
                // console.log(res.data.split('||')[0].trim());

                this.props.handlerFromParent(getLabel(res.data.split('||')[0].trim()));
            } else {
                const constituentData = await getLabel(this.state.label);
                this.setState({ dependency: getDependency(constituentData) }) //Set dependency tree state for future use.
                this.props.handlerFromParent(constituentData);
            }
        } catch (err) {
            console.log(err);
        }
    }

    addSentence = (event) => {
        event.preventDefault();
        const db = firebase.firestore();
        if (this.state.sentence && this.state.label === '') {
            db.collection('Treebank').add({
                sentence: this.state.sentence,
            });
            alert("Successfully added to the database!");
        }
        else if (this.state.sentence === '' && this.state.label) {
            db.collection('Treebank').add({
                label: this.state.label,
                dependency: this.state.dependency,
            })
            alert("Successfully added to the database!");
        }
        else if (this.state.sentence && this.state.label) {
            alert("You cannot input both Labelled Bracket and raw sentence");
        }
        else {
            alert("You input nothing ...");
        }
    };



    updateInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    clearInput = () => {
        this.setState({
            sentence: '',
            label: ''
        });
    }

    render() {
        return (
            <div>
                {/* Title */}
                <Card className="text-center">
                    <CardHeader >Labelled Bracket</CardHeader>
                    <br></br>
                    {/* Label Bracket textarea */}
                    <form>
                        <textarea
                            rows="4" cols="50"
                            name="label"
                            placeholder="Input Labelled bracket here,e.g.,[S(2)[NP[PPRS ฉัน]] [VP(1)[VACT ปฏิเสธ][NP[NCMN งาน]]]]"
                            value={this.state.label}
                            onChange={this.updateInput}

                        >
                        </textarea>
                        <br></br>

                        {/* Draw & Clear Buttons  */}
                        <span>
                            <Button color="primary" size="sm" onClick={this.drawHandler}>Draw</Button>{' '}
                            <Button color="primary" size="sm" onClick={this.clearInput}>Clear</Button>{' '}
                            {/*<Button color="primary" size="sm" onClick={false}>Suggest</Button>*/}
                        </span>
                        <br></br>
                        <br></br>

                        {/* Add to database button */}
                        <Button type="submit" color="primary" size="lg" active onClick={this.addSentence} >Add to database</Button>
                    </form>
                    <br></br>
                </Card>

                {/* Sentence Textarea */}
                <br></br>
                <br></br>
                <Card className="text-center">
                <CardHeader>Raw Input Sentence</CardHeader>
                <textarea
                            rows="3" cols="65"
                            name="sentence"
                            placeholder="Input raw sentence here,e.g., ฉันปฏิเสธงาน"
                            value={this.state.sentence}                            
                            onChange={this.updateInput}

                        >
                        </textarea>
                </Card>
            </div>
        );
    }
}
export default Label;