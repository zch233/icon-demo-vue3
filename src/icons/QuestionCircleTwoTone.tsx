// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone';

export interface QuestionCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const QuestionCircleTwoTone: QuestionCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={QuestionCircleTwoToneSvg} />;

QuestionCircleTwoTone.displayName = 'QuestionCircleTwoTone';

export default QuestionCircleTwoTone;