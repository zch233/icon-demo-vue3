// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';

export interface TranslationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TranslationOutlined: TranslationOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TranslationOutlinedSvg} />;

TranslationOutlined.displayName = 'TranslationOutlined';

export default FunctionalComponent;