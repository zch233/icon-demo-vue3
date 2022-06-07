// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';

export interface TableOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TableOutlined: TableOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TableOutlinedSvg} />
    ;

TableOutlined.displayName = 'TableOutlined';

export default FunctionalComponent;