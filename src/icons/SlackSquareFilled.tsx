// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled';

export interface SlackSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlackSquareFilled: SlackSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlackSquareFilledSvg} />
    ;

SlackSquareFilled.displayName = 'SlackSquareFilled';

export default FunctionalComponent;