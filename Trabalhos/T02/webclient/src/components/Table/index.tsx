interface TableProps {
    data?: any[][]; 
    headers?: string[];
    noMargin?: boolean;
    dataLabel?: string[];
}

export function Table({ data = [], headers, noMargin, dataLabel }: TableProps) {
    return (
        <>
            <div>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            {
                                headers?.map((header, index) => (
                                    <th style={{textAlign: "center"}} key={index}>
                                        {header}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, index) => (
                                <tr key={index}>
                                    {
                                        data.map((value, index) => (
                                            <td style={{textAlign: "center"}} key={index} data-label={(headers && headers[index]) || (dataLabel && dataLabel[index])}>
                                                <div>
                                                    {value}
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>    

        </>
    );
}