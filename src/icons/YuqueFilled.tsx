// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled';

export interface YuqueFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const YuqueFilled: YuqueFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={YuqueFilledSvg} />;

YuqueFilled.displayName = 'YuqueFilled';

export default FunctionalComponent;