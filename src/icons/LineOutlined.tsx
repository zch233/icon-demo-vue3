// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined';

export interface LineOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LineOutlined: LineOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LineOutlinedSvg} />
    ;

LineOutlined.displayName = 'LineOutlined';

export default FunctionalComponent;