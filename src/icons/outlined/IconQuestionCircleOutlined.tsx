// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/QuestionCircleOutlined';

export interface QuestionCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconQuestionCircleOutlined: QuestionCircleOutlinedIconType = (props, context) => (
    <Icon name='QuestionCircleOutlined' {...{ ...props, ...context.attrs }} icon={QuestionCircleOutlinedSvg} />
);

IconQuestionCircleOutlined.displayName = 'IconQuestionCircleOutlined';

export default IconQuestionCircleOutlined;