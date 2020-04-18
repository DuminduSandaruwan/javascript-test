const addElement = (parentId, elementTag, elementId, html) => {
    const p = document.getElementById(parentId);
    const newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

const removeElement = elementId => {
    const element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

const addIdFilter = () => {
    const html = '<legend><span class="number">' +
        '</span> Enter ID</legend>' +
        '<input type="number" name="id" required placeholder="Enter ID *">';
    addElement('filters', 'div','idFilter', html);
}

const addStopFilter = () => {
    const html = '<legend><span class="number"></span> Select Stop</legend>' +
        '<select id="stop" name="stops">' +
        '<option value="true">True</option>' +
        '<option value="false">False</option>' +
        '</select>';
    addElement('filters', 'div','stopFilter', html);
}

const addFlightTimeFilter = () => {
    const html = '<legend><span class="number"></span> Enter Flight Time</legend>' +
        '<input type="number" name="minflightTime" required placeholder="Enter Flight Time *">';
    addElement('filters', 'div','flightTimeFilter', html);
}

const addMergeFilter = () => {
    const html = '<legend><span class="number"></span> Merge</legend>' +
        '<select id="merge" name="merge">' +
        '<option value="true">True</option>' +
        '<option value="false">False</option>' +
        '</select>';
    addElement('filters', 'div','mergeFilter', html);
}

const filterSelect = (cb, filter) => {
    const checked = cb.checked;
    switch (filter) {
        case 'id':
            if (checked) {
                addIdFilter();
            } else {
                removeElement('idFilter');
            }
            break;
        case 'stop':
            if (checked) {
                addStopFilter();
            } else {
                removeElement('stopFilter');
            }
            break;
        case 'flightTime':
            if (checked) {
                addFlightTimeFilter();
            } else {
                removeElement('flightTimeFilter');
            }
            break;
        case 'merge':
            if (checked) {
                addMergeFilter()
            } else {
                removeElement('mergeFilter');
            }
            break;

    }
}

const createTable = data => {
    let columns = ['id', 'flightTime', 'stops'];
    const table = document.createElement("table");
    let tr = table.insertRow(-1);
    for (let i = 0; i < columns.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = columns[i];
        tr.appendChild(th);
    }
    for (let i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < columns.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][columns[j]];
        }
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";
    resultDiv.appendChild(table);
}



