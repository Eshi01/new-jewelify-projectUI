export default function serverSideTracking(eventName, eventUrl, eventId) {
    fetch('/api/server-side-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            eventName: eventName,
            eventUrl: eventUrl,
            eventId: eventId
        })
    })
}