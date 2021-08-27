import React, { useRef, useState } from "react";
import FullCalendar, { CalendarApi } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Add from "./addEvent";
import axios from "axios";
import moment from "moment";
export default function Calendar() {
  const [modalOpen, setModelOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [canDrop, setCanDrop] = useState(true);

  const calendarRef = React.createRef();

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      title: event.title,

      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
    });
  };

  async function handleEventAdd(data) {
    await axios.post("http://localhost:5000/event/create_event", data.event);
    console.log(data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
      "http://localhost:5000/event/get_events?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );

    setEvents(response.data);
  }

  return (
    <>
      <section>
        <button onClick={() => setModelOpen(true)}>Add event</button>{" "}
        <div style={{ position: "relative", zIndex: 0 }}>
          <FullCalendar
            editable={true}
            events={events}
            ref={calendarRef}
            droppable={true}
            defaultView="timeGridWeek"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            selectable={true}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date) => handleDatesSet(date)}
            eventDrop={(info) => {
              //<--- see from here
              const { start, end } = info.oldEvent._instance.range;
              console.log(start, end);
              const { start: newStart, end: newEnd } =
                info.event._instance.range;
              console.log(newStart, newEnd);
              if (new Date(start).getDate() === new Date(newStart).getDate()) {
                info.revert();
              }
            }}
          />
        </div>
        <Add
          isOpen={modalOpen}
          onClose={() => setModelOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        />
      </section>
    </>
  );
}
