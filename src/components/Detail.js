import React, { Component } from 'react'
import rows1 from '../assets/pos.json'
import rows2 from '../assets/pharse.json'
import {Table} from 'reactstrap'

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state ={
            pos :[],
            pharse:[]
            
        }
    }
    componentDidMount(){
        this.setState(()=>{
            return{
                pos: rows1,
                pharse: rows2
            }
        }
        )
    }
    render() {
        return (
            <div>
                <Table size="sm" striped>
                    <thead>
                        <th>POS</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {this.state.pos.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.POS}</td>
                                    <td>{data.Description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Table size="sm" striped>
                    <thead>
                        <th>Pharse</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                    {this.state.pharse.map((data2, j) => {
                            return (
                                <tr key={j}>
                                    <td>{data2.Phrase}</td>
                                    <td>{data2.Descriptions}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
