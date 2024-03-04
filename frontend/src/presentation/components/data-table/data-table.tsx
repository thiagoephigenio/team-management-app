import { ReactNode } from 'react';
import * as S from './data-table.styles';

type Base = { [p: string]: unknown };

interface DataTableAction {
  icon: ReactNode;
  callback: (value: Base) => void;
}
type DataTableColumn = {
  name: string;
  title: string;
};

interface DataTableProps {
  columns: DataTableColumn[];
  rows: Array<Base>;
  additionalColumn?: ReactNode;
  actions?: DataTableAction[];
}

export function DataTable({ actions, rows, columns }: DataTableProps) {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.name}>{row[column.name] as ReactNode}</td>
              ))}
              {actions && (
                <td>
                  <S.TableActions>
                    {actions.map((action, index) => (
                      <S.IconButton
                        key={index}
                        onClick={() => action.callback(row)}
                      >
                        {action.icon}
                      </S.IconButton>
                    ))}
                  </S.TableActions>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
