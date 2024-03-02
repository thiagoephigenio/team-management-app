import { ReactNode } from 'react';
import * as S from './data-table.styles';

type Base = { [p: string]: unknown };

interface DataTableAction {
  icon: ReactNode;
  callback: (value: Base) => void;
}

interface DataTableProps {
  columns: string[];
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
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.entries(row).map(([key, rowItem]) => (
                <td key={key}>{rowItem as ReactNode}</td>
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
