// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QuestionCircleTwoToneSvg from 'icon-base/es/asn/QuestionCircleTwoTone';

export interface QuestionCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQuestionCircleTwoTone: QuestionCircleTwoToneIconType = (props, context) => (
    <Icon name='QuestionCircleTwoTone' {...{ ...props, ...context.attrs }} icon={QuestionCircleTwoToneSvg} />
);

IconQuestionCircleTwoTone.displayName = 'IconQuestionCircleTwoTone';
IconQuestionCircleTwoTone.theme = 'twotone';
IconQuestionCircleTwoTone.originName = 'question-circle';

export default IconQuestionCircleTwoTone;
