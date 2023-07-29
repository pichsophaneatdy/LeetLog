import React, {useState, useEffect} from 'react'
import "./Heatmap.scss"
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import countPostsByDay from '../../utils/getHeatmapData';

const Heatmap = ({posts}) => {
    const [data, setData] = useState([]);
    const [windowSize, setIsWindowSize] = useState(window.innerWidth);
    const handleResize = () => {
        setIsWindowSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    useEffect(() => {
        if(posts.length > 0) {
            let heatmapData = countPostsByDay(posts);
            setData(heatmapData);
        }
    }, [posts])
    return (
        <div className="heatmap__container">
            <p className="heatmap__title">Your contributions</p>
            <ReactCalendarHeatmap
                startDate={windowSize < 768 ? new Date().getTime() - 15778463000 : new Date().getTime() - 31556926000} // Replace with your start date
                endDate={new Date()} // Replace with your end date
                values={data}
                showWeekdayLabels = {true}
                classForValue={(value) => {
                if (!value) {
                    return 'color-empty'; // Customize the class name for empty days
                }
                return `color-github-${value.count}`; // Customize the class name based on your data
                }}
                tooltipDataAttrs={(value) => ({
                'data-tip': `${value?.date?.slice(0, 10)}: ${value?.count} contributions`, // Customize the tooltip
                })}
            />
        </div>
    )
}

export default Heatmap
