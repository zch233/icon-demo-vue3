// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';

export interface ColumnWidthOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ColumnWidthOutlined: ColumnWidthOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ColumnWidthOutlinedSvg} />
    ;

ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';

export default FunctionalComponent;