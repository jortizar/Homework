import React from 'react'

export default class Quotes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            random: 0,
            error: null,
            isLoaded: false,
            data: []
        }
    }
    handleClick() {
        const min = 1;
        const max = 501;
        const rand = min + Math.random() * (max - min);
        const rounderd = Math.round(rand)
        this.setState({ random: rounderd });
      }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json')
            .then(result => result.json())
                .then(result => {
                    this.setState({
                        isLoaded:true,
                        data: result
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded: true,
                        error : error
                    })
                })     
        setInterval(()=>{        
            const min = 1;
            const max = 501;
            const rand = min + Math.random() * (max - min);
            const rounderd = Math.round(rand)
            this.setState({ random: rounderd });
            
        }, 1000 * 60 * 60 * 24);
    }
    

    render(){
        const {error,isLoaded,data,random} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return <div>
                 <button onClick={this.handleClick.bind(this)}>Click</button>
                 {data.map((element,i) => {
                   if(i == random ){
                       return<div key={i}>{element.en}
                       </div>
                        
                    }
                 })}
                </div>
        }
    }
}

