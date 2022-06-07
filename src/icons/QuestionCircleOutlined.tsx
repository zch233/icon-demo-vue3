// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined';

export interface QuestionCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const QuestionCircleOutlined: QuestionCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={QuestionCircleOutlinedSvg} />
    ;

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';

export default FunctionalComponent;