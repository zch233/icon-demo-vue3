// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined';

export interface InsertRowAboveOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InsertRowAboveOutlined: InsertRowAboveOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InsertRowAboveOutlinedSvg} />
    ;

InsertRowAboveOutlined.displayName = 'InsertRowAboveOutlined';

export default FunctionalComponent;