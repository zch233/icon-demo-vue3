// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';

export interface QuestionCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const QuestionCircleFilled: QuestionCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={QuestionCircleFilledSvg} />;

QuestionCircleFilled.displayName = 'QuestionCircleFilled';

export default FunctionalComponent;