// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined';

export interface InsertRowLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InsertRowLeftOutlined: InsertRowLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InsertRowLeftOutlinedSvg} />
    ;

InsertRowLeftOutlined.displayName = 'InsertRowLeftOutlined';

export default FunctionalComponent;