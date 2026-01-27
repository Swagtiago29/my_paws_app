import { useState, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { Calendar } from 'react-native-big-calendar'
import IconButton from "../components/IconButton";
import { generateWeekSlots } from "../utils/generateEvents";

export default function MyCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [dayOpen, setDayOpen] = useState(false)

    const goNextMonth = () => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() + 1);
        setCurrentDate(d);
    };


    const goPrevMonth = () => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() - 1);
        setCurrentDate(d);
    };

    return (
        <View style={{ height: "100%" }}>
            {dayOpen && (<Pressable onPress={() => setDayOpen(false)} style={{ position: "absolute", height: "100%", width: "100%", backgroundColor: "black", zIndex: 1 }}>
                <View>
                    <Text style={{ color: 'white' }}>
                        {selectedDate?.toString()}
                    </Text>
                </View>
            </Pressable>)}

            <IconButton text="Previous Month" icon="chevron-back" onPress={goPrevMonth} direction={"left"} />
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "400", margin: 10 }}>
                {currentDate.toLocaleDateString("esp-US", {
                    month: "long",
                    year: "numeric",
                })}
            </Text>
            <Calendar
                events={[]}
                height={500}
                mode="month"
                date={currentDate}
                minHour={9}
                maxHour={19}
                onPressCell={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);


                    const pressed = new Date(date);
                    pressed.setHours(0, 0, 0, 0);


                    if (pressed < today) {
                        console.log("select a valid day");
                        return; // ⛔ stop execution
                    }


                    setSelectedDate(date);
                    setDayOpen(true);
                }}
            />
            <IconButton text="Next Month" icon="chevron-forward" onPress={goNextMonth} direction={"right"} />
        </View>
    );
}
