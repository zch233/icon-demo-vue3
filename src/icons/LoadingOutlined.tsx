// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';

export interface LoadingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LoadingOutlined: LoadingOutlinedIconType = (props, context) => <Icon name='LoadingOutlined' {...{ ...props, ...context.attrs }} icon={LoadingOutlinedSvg} />;

LoadingOutlined.displayName = 'LoadingOutlined';

export default LoadingOutlined;