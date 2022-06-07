// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LineHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineHeightOutlined';

export interface LineHeightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LineHeightOutlined: LineHeightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LineHeightOutlinedSvg} />
    ;

LineHeightOutlined.displayName = 'LineHeightOutlined';

export default FunctionalComponent;