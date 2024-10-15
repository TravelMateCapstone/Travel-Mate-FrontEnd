import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";  // Plugin để hỗ trợ chế độ xem tuần và ngày
import interactionPlugin from "@fullcalendar/interaction";
import '../../assets/css/Local/LocalCalendarManagement.css';

import TUICalendar from "@toast-ui/react-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export default function LocalCalendarManagement() {
    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    return (
        <div className="calendar-container">
            <p className="calendar-title">Lịch</p>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{            // Cấu hình toolbar
                    left: 'prev,next today',  // Các nút điều hướng
                    center: 'title',          // Tiêu đề hiển thị giữa
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'  // Thêm các lựa chọn xem theo tháng, tuần, ngày
                }}
                weekends={true}  // Hiển thị Thứ 7 và Chủ Nhật
                dateClick={(e) => handleDateClick(e)}
                events={[
                    { title: "event 1", date: "2024-10-07" },
                    { title: "event 2", date: "2024-10-17" }
                ]}
                eventContent={renderEventContent}
                height="100vh"  // Chiều cao full màn hình
            />
        </div>
    );
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}