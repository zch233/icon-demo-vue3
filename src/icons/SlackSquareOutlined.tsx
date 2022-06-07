// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined';

export interface SlackSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlackSquareOutlined: SlackSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlackSquareOutlinedSvg} />
    ;

SlackSquareOutlined.displayName = 'SlackSquareOutlined';

export default FunctionalComponent;