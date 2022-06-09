// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';

export interface SmileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SmileFilled: SmileFilledIconType = (props, context) => <Icon name='SmileFilled' {...{ ...props, ...context.attrs }} icon={SmileFilledSvg} />;

SmileFilled.displayName = 'SmileFilled';

export default SmileFilled;