import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Container,ListGroup, Modal, Card} from 'react-bootstrap';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './Test JSON.json';
import moment from 'moment';
import './App.css';
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend([],dataSource.members[0].activity_periods.map(obj => {return {StartTime : moment(obj.start_time, "MMMM Do YYYY, h:mm:ss a").toDate().toISOString(),EndTime : moment(obj.end_time, "MMMM Do YYYY, h:mm:ss a").toDate().toISOString()}}) , null, true);
    this.data1 = extend([],dataSource.members[1].activity_periods.map(obj => {return {StartTime : moment(obj.start_time, "MMMM Do YYYY, h:mm:ss a").toDate().toISOString(),EndTime : moment(obj.end_time, "MMMM Do YYYY, h:mm:ss a").toDate().toISOString()}}) , null, true);
    this.state = {
      showModal: false,
      showModaldata : false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
    }
  open() {
    this.setState({showModal: true});
  }
  
  close() {
    this.setState({showModal: false});
  }
  open1() {
    this.setState({showModaldata: true});
  }
  
  close1() {
    this.setState({showModaldata: false});
  }
  render(){
    let StartTime = moment();
    console.log("HAHA",StartTime.format());
    return (
      <React.Fragment>
        <h1 className="text-center clr">Users List</h1>
        <Container className="mrg_tp">
          <Card className="text-center">
            <Card.Body onClick={this.open}>{dataSource.members[0].real_name}</Card.Body>
          </Card>
          <br/>
          <Card className="text-center">
            <Card.Body onClick={this.open1}>{dataSource.members[1].real_name}</Card.Body>
          </Card>
        </Container>
        <div>
        <Modal className="modal-container" 
          show={this.state.showModal} 
          onHide={this.close}
          animation={true} 
          size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section className="marn-lft">
              <section><span className="clr">Real Name :</span> {dataSource.members[0].real_name}</section>
              <section><span className="clr">State :</span> {dataSource.members[0].tz}</section>
              <section>
                <Card className='mrg_div1' style={{ width: '22rem' }}>
                  <Card.Header>Activity Periods</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{dataSource.members[0].activity_periods[0].start_time} - {dataSource.members[0].activity_periods[0].end_time}</ListGroup.Item>
                    <ListGroup.Item>{dataSource.members[0].activity_periods[1].start_time} - {dataSource.members[0].activity_periods[1].end_time}</ListGroup.Item>
                    <ListGroup.Item>{dataSource.members[0].activity_periods[2].start_time} - {dataSource.members[0].activity_periods[2].end_time}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </section>
            </section>
            <div className='schedule-control-section mrg_div'>
              <div className='col-lg-12 control-section'>
                <div className='control-wrapper schedule-wrapper'>
                  <ScheduleComponent width='100%' height='370px' selectedDate={StartTime.format()} eventSettings={{ dataSource: this.data }}>
                    <ViewsDirective>
                      <ViewDirective option='MonthAgenda'/>
                    </ViewsDirective>
                    <Inject services={[MonthAgenda]}/>
                  </ScheduleComponent>
                </div>
              </div>
            </div>
          </Modal.Body>       
        </Modal> 
        <Modal className="modal-container" 
          show={this.state.showModaldata} 
          onHide={this.close1}
          animation={true} 
          size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section className="marn-lft">
              <section><span class="clr">Real Name :</span> {dataSource.members[1].real_name}</section>
              <section><span class="clr">State :</span> {dataSource.members[1].tz}</section>
              <section>
                <Card className='mrg_div1' style={{ width: '22rem' }}>
                  <Card.Header>Activity Periods</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{dataSource.members[1].activity_periods[0].start_time} - {dataSource.members[1].activity_periods[0].end_time}</ListGroup.Item>
                    <ListGroup.Item>{dataSource.members[1].activity_periods[1].start_time} - {dataSource.members[1].activity_periods[1].end_time}</ListGroup.Item>
                    <ListGroup.Item>{dataSource.members[1].activity_periods[2].start_time} - {dataSource.members[1].activity_periods[2].end_time}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </section>
            </section>
            <div className='schedule-control-section mrg_div'>
              <div className='col-lg-12 control-section'>
                <div className='control-wrapper schedule-wrapper'>
                  <ScheduleComponent width='100%' height='370px' eventSettings={{ dataSource: this.data1 }}>
                    <ViewsDirective>
                      <ViewDirective option='MonthAgenda'/>
                    </ViewsDirective>
                    <Inject services={[MonthAgenda]}/>
                  </ScheduleComponent>
                </div>
              </div>
            </div>
          </Modal.Body>       
        </Modal> 
      </div>
    </React.Fragment>
    );
  }
}

export default App;
