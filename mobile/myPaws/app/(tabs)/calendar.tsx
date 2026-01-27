import { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { Calendar } from 'react-native-big-calendar'
import IconButton from "../components/IconButton";
import { generateWeekSlots } from "../utils/generateEvents";
import { Ionicons } from "@expo/vector-icons";

const DATA: string[] = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
];

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

    const formatSpanishDay = (date: Date) =>
        new Intl.DateTimeFormat("es-UY", {
            weekday: "long",
            day: "numeric",
        }).format(date);

    const capitalize = (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1);

    return (
        <View style={{ height: "100%" }}>
            {dayOpen && (<Pressable onPress={() => setDayOpen(false)} style={{ position: "absolute", height: "98%", width: "85%", backgroundColor: "white", zIndex: 1, borderRadius: 8, borderWidth: 2, borderColor: '#5C9E3F' }}>
                <View style={{ padding: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22, fontWeight: 500 }}>
                            {selectedDate && capitalize(formatSpanishDay(selectedDate))}
                        </Text>
                        <Ionicons name={"close"} size={30} color="black" />
                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Text style={{ fontSize: 17, margin: 5 }}>{item}</Text>}>

                    </FlatList>
                </View>
            </Pressable>)}
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', backgroundColor: '#5C9E3F' }}>
                <IconButton text="Previous Month" icon="chevron-back" onPress={goPrevMonth} direction={"left"} />
                <IconButton text="Next Month" icon="chevron-forward" onPress={goNextMonth} direction={"right"} />
            </View>

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

        </View>
    );
}
